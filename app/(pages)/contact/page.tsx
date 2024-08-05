
import dynamic from 'next/dynamic'
const FormSection = dynamic(() => import('@/components/contact/FormSection')) 


export default function Contact() {
  return (
    <main className="relative  flex justify-center items-center flex-col mx-auto overflow-clip">
          <FormSection />
    </main>
  );
}
