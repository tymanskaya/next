import Image from "next/image";
import logo from './assets/logo.png'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>login1</div>
      </main>
    </div>
  );
}
//Обязательные атрибуты: alt, width и height
//alt — это альтернативный текст для изображения. Он обязателен и выполняет две важные функции:
// Отображает текстовое описание, если картинка по какой-то причине не загрузилась.
// Используется программами для чтения с экрана, что
//Если изображение является чисто декоративным (например, фоновый узор) и не несёт смысловой нагрузки,
// можно оставить атрибут alt пустым.

//Вы обязаны указывать точные размеры изображения в пикселях через атрибуты width и height.
