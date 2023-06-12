import {MailOptions, sendEmailConfirmation} from '@/infra/utils/node-mailer';

export const notifyJob =  {
  key: 'RegistrationMail',
  async handle({ data }: any) {
    const optionsEmail = new MailOptions(
        `${data.name} <${data.email}>`,
        'Lembrete de reunião',
        `<html lang = "pt-br">
          <body>
            <p>Olá, ${data.name}, faltam 10 minutos para sua reunião está começar.</p>
            <style="fontSize: 20px">Planejamento: ${data.meetingDetails}</p>
            <p style="fontSize: 20px">Local: ${data.local}</p>
          </body>
         <html>
         `
      );
    
    sendEmailConfirmation(optionsEmail);
  },
};