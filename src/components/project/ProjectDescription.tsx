export const ProjectDescription = ({
  main,
  commit,
}: {
  main?: string; 
  commit?: string;
}) => (
  <>
    {main && (
      <section className="prose prose-lg mb-12 whitespace-pre-line leading-relaxed">
        <p>{main}</p>
      </section>
    )}

    {commit && (
      <div className="rounded-sm p-6 mb-12 text-lightText shadow-md shadow-purple">
        <h2 className="text-2xl font-semibold mb-2">Last Commit</h2>
        <p className="whitespace-pre-line leading-relaxed">{commit}</p>
      </div>
    )}
  </>
);