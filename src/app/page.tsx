// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
import HomePage from "~/components/home";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();
  // if (!session?.user) return null;

  return <HomePage />;
}
