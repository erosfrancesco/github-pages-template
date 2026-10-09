import { useParams } from "react-router-dom";

export function ItemTemplatePage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <p className="text-on-surface-variant">
        No Item found for {id}.
      </p>
    );
  }

  const id = Number(id);
  if (isNaN(id)) {
    return (
      <p className="text-error">Invalid ID: {id}</p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <ItemTemplatePageContent id={id} />
    </div>
  );
}

function ItemTemplatePageContent({ id }) {
  const { data } = useNorrisJokeById(id);

  return data;
}