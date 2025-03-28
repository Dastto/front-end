import { Button } from "@/components/button";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 p-4">
        <h2 className="text-gray-500">طراحی دکمه :</h2>
        <div className="max-w-[300px]">
          <Button>بریم تمومش کنیم</Button>
        </div>
        <h2 className="text-gray-500">وقتی لودینگه :</h2>
        <div className="max-w-[300px]">
          <Button disabled>بریم تمومش کنیم</Button>
        </div>
        <hr />
        <h2 className="text-gray-500">تمام عرض :</h2>
        <div className="max-w-[300px]">
          <Button fullWidth>بریم تمومش کنیم</Button>
        </div>
        <h2 className="text-gray-500">وقتی تمام عرض و لودینگه :</h2>
        <div className="max-w-[300px]">
          <Button disabled fullWidth>
            بریم تمومش کنیم
          </Button>
        </div>
      </main>
    </div>
  );
}
