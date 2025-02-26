import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeavingPage() {
  return (
    <div>
      <h2>Interleaving Page</h2>
      <h2>
        *** if we use server component inside a client component, the server
        component become client component and it is not good for performance and
        if we have some code in server component that works only in server
        component we get error ***
      </h2>
      <h2>*** so we use children and pass the server component as prop ***</h2>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
}
