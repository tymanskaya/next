import Image from "next/image";
import logo from './assets/logo.png'

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

                {/*1 cпособ, когда картинка импортируется из папки public
          Обязательные атрибуты: alt, width и height
          <Image src="/logo.png" alt="IT-Incubator`s logo" width={100} height={100} />*/}

                {/* 2 cпособ для изображений, которые находятся внутри папки src
      (например, src/assets или рядом с компонентами), а не в public.
      Ключевое преимущество этого подхода заключается в том,
      что при прямом импорте не нужно указывать width и height.
          <Image src={logo} alt="IT-Incubator`s logo"/>*/}

                {/*3 cпособ Работа с внешними изображениями по URL
      Обязательные атрибуты: alt, width и height
      Next.js по умолчанию блокирует картинки с внешних доменов. Чтобы разрешить
      загрузку изображений, необходимо добавить доверенные домены в конфигурацию Next.js.

          <Image src="https://www.magnific.com/ru/free-photo/fun-backpacker-german-shepherd-dog-cartoon-character_14199200.htm#fromView=keyword&page=1&position=4&uuid=5e0e861c-42c9-4796-b689-8717719e1897&query=Svg"
                 alt="IT-Incubator`s logo"
                 width={100}
                 height={100} />*/}

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
