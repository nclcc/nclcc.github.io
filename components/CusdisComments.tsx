import Link from "next/link";

/** No third-party comments are loaded, even if an old Cusdis env var is set. */
export default function CusdisComments({ title }: { title: string }) {
  return (
    <section className="mt-14 prose-bk" aria-label="Discussion">
      <h2>Discuss this post</h2>
      <p>
        Send your thoughts on “{title}” to{" "}
        <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.
        Messages are private and are not published as comments.
      </p>
      <p className="text-sm">
        Read the <Link href="/privacy/">privacy notice / informativa privacy</Link> before writing.
      </p>
    </section>
  );
}
