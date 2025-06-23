//notes/[id]/page.tsx

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";
import { QueryClient } from "@tanstack/react-query";

export default async function NoteDetails({
  params,
}: {
  params: { id?: string };
}) {
  const queryClient = new QueryClient();

  // Перевірка і валідація id перед асинхронними операціями
  if (!params?.id) {
    return <p>Invalid note ID</p>;
  }

  const idString = params.id;
  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    return <p>Invalid note ID</p>;
  }

  // Асинхронне завантаження даних
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}
