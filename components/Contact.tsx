import {
  Button,
  Container,
  H1,
  Icons,
  Input,
  TextArea,
  useMessage,
  useT,
} from "cllk";
import { useForm } from "react-hook-form";
function Contact() {
  const { t } = useT();
  const { messagePromise } = useMessage();
  const { register, handleSubmit } = useForm();
  const giveData = async (res: any) => {
    const uri = `https://us-east-1.aws.data.mongodb-api.com/app/http-ucuki/endpoint/telegram`;
    messagePromise(
      async () => {
        await fetch(uri, {
          method: "POST",
          body: JSON.stringify({
            title: "Nueva Peticion de Cliente",
            description: JSON.stringify(res),
            telegram: 5491833550,
          }),
        });
      },
      {
        error: t(
          "Error, intenta por otros medios",
          "Error, please try through other means"
        ),
        pending: t("Enviando Mensaje", "Sending Message"),
        success: t(
          "Gracias!, nos pondremos en contacto contigo",
          "Thank you! We will get in touch with you"
        ),
      }
    );
  };
  return (
    <>
      <Container className="dark:bg-zinc-800 bg-zinc-100">
        <H1 span size={"2.2em"}>
          {t("Contactame", "Contact me")}
        </H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto lg:px-8 sm:divide-x divide-y sm:divide-y-0 sm:m-10 cursor-default">
          <div className="py-6 flex flex-col space-y-5 justify-center items-center">
            <H1 size={"1.5em"}>{t("Redes Sociales", "Social Media")}</H1>
            <Button
              onClick={() => {
                window.open("https://m.me/104952405483178", "_blank");
              }}
              icon={<Icons icon="IconBrandMessenger" />}
            >
              Messenger
            </Button>
            <Button
              onClick={() => {
                window.open("https://wa.me/593959434867", "_blank");
              }}
              icon={<Icons icon="IconBrandWhatsapp" />}
            >
              Whatsapp
            </Button>
            <Button
              onClick={() => {
                window.open("https://t.me/llkT_bot", "_blank");
              }}
              icon={<Icons icon="IconBrandTelegram" />}
            >
              Telegram
            </Button>
            <Button
              onClick={() => {
                window.location.href = "tel:+593959434867";
              }}
              icon={<Icons icon="IconCell" />}
            >
              Telefono
            </Button>
          </div>
          <form
            onSubmit={handleSubmit(giveData)}
            className="flex flex-col md:py-0 w-full mx-auto py-5 md:px-10"
          >
            <H1 size={"1.5em"}>Enviar Mensaje</H1>
            <Input
              register={register}
              name="name"
              label={t("Nombre", "Name")}
            />
            <Input
              register={register}
              name="email"
              type="email"
              label={t("Email", "Email")}
            />

            <TextArea
              register={register}
              name="message"
              label={t("Descripcion", "Description")}
              required
            />

            <Button
              className="mt-5"
              type="submit"
              icon={<Icons icon="IconSend" />}
              center
              onClick={giveData}
            >
              {t("Enviar", "Send")}
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Contact;
