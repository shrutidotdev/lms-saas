import { GetStartedBtn } from "./components/Button";

export default function Home() {
  return (
    <>
      

      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto">
        <h1 className="text-3xl font-bricolage font-bold">
          Create Your AI Agent Here
        </h1>

        <GetStartedBtn />
      </main>
    </>
  );
}
