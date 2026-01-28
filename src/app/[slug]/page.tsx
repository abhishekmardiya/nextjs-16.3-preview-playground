import { Suspense } from "react";
import { Form } from "@/components/Form";

export default function FormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form />
    </Suspense>
  );
}
