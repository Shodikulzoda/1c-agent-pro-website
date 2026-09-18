import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="1C Agent Pro"
          title="Дизайн-система готова — секции сайта в следующем шаге"
          description="Токены цвета и типографики, базовые компоненты (Button, Container, SectionHeading, Eyebrow) подключены и собираются без ошибок."
        />
        <div className="flex gap-3">
          <Button href="#">Основная кнопка</Button>
          <Button href="#" variant="ghost">
            Второстепенная
          </Button>
        </div>
      </Container>
    </main>
  );
}
