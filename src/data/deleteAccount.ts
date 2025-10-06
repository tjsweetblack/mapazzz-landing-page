export interface DeleteAccountTranslations {
  title: string;
  description: string;
  form: {
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    submitting: string;
  };
  success: {
    title: string;
    message: string;
    submitAnother: string;
  };
  errors: {
    emailRequired: string;
    emailInvalid: string;
    submitError: string;
  };
  warning: {
    title: string;
    items: string[];
  };
  additionalInfo: {
    title: string;
    items: string[];
    contact: {
      text: string;
      email: string;
    };
  };
}

export const deleteAccountTranslations: Record<"pt" | "en" | "jp", DeleteAccountTranslations> = {
  pt: {
    title: "Solicitação de Exclusão de Conta",
    description: "Se você deseja excluir permanentemente sua conta MapaZZZ e todos os dados associados, preencha o formulário abaixo. Esta ação é irreversível e todos os seus dados serão permanentemente removidos dos nossos sistemas.",
    form: {
      emailLabel: "Endereço de E-mail da Conta",
      emailPlaceholder: "Digite o e-mail associado à sua conta",
      submitButton: "Solicitar Exclusão da Conta",
      submitting: "Enviando solicitação..."
    },
    success: {
      title: "Solicitação Enviada com Sucesso",
      message: "Sua solicitação de exclusão de conta foi recebida. Nossa equipe processará sua solicitação dentro de 7 dias úteis. Você receberá um e-mail de confirmação quando a exclusão for concluída.",
      submitAnother: "Enviar outra solicitação"
    },
    errors: {
      emailRequired: "O endereço de e-mail é obrigatório.",
      emailInvalid: "Por favor, insira um endereço de e-mail válido.",
      submitError: "Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde."
    },
    warning: {
      title: "Aviso Importante",
      items: [
        "Esta ação é permanente e irreversível",
        "Todos os seus dados pessoais serão excluídos permanentemente",
        "Histórico de localização e reportagens serão removidos",
        "Você não poderá recuperar sua conta após a exclusão",
        "O processo pode levar até 7 dias úteis para ser concluído"
      ]
    },
    additionalInfo: {
      title: "Informações Adicionais:",
      items: [
        "Apenas o proprietário da conta pode solicitar a exclusão",
        "Você deve usar o mesmo endereço de e-mail associado à sua conta",
        "Alguns dados podem ser retidos conforme exigido por lei",
        "Dados anonimizados para análise estatística podem ser mantidos",
        "Você pode cancelar esta solicitação entrando em contato conosco antes do processamento"
      ],
      contact: {
        text: "Para dúvidas sobre este processo, entre em contato:",
        email: "contato@mapazzz.com"
      }
    }
  },
  en: {
    title: "Account Deletion Request",
    description: "If you wish to permanently delete your MapaZZZ account and all associated data, please fill out the form below. This action is irreversible and all your data will be permanently removed from our systems.",
    form: {
      emailLabel: "Account Email Address",
      emailPlaceholder: "Enter the email associated with your account",
      submitButton: "Request Account Deletion",
      submitting: "Submitting request..."
    },
    success: {
      title: "Request Submitted Successfully",
      message: "Your account deletion request has been received. Our team will process your request within 7 business days. You will receive a confirmation email when the deletion is complete.",
      submitAnother: "Submit another request"
    },
    errors: {
      emailRequired: "Email address is required.",
      emailInvalid: "Please enter a valid email address.",
      submitError: "An error occurred while submitting your request. Please try again later."
    },
    warning: {
      title: "Important Warning",
      items: [
        "This action is permanent and irreversible",
        "All your personal data will be permanently deleted",
        "Location history and reports will be removed",
        "You will not be able to recover your account after deletion",
        "The process may take up to 7 business days to complete"
      ]
    },
    additionalInfo: {
      title: "Additional Information:",
      items: [
        "Only the account owner can request deletion",
        "You must use the same email address associated with your account",
        "Some data may be retained as required by law",
        "Anonymized data for statistical analysis may be kept",
        "You can cancel this request by contacting us before processing"
      ],
      contact: {
        text: "For questions about this process, contact us at:",
        email: "contact@mapazzz.com"
      }
    }
  },
  jp: {
    title: "アカウント削除リクエスト",
    description: "MapaZZZアカウントと関連するすべてのデータを完全に削除したい場合は、以下のフォームにご記入ください。この操作は元に戻すことができず、すべてのデータが当社システムから完全に削除されます。",
    form: {
      emailLabel: "アカウントのメールアドレス",
      emailPlaceholder: "アカウントに関連付けられたメールアドレスを入力",
      submitButton: "アカウント削除をリクエスト",
      submitting: "リクエストを送信中..."
    },
    success: {
      title: "リクエストが正常に送信されました",
      message: "アカウント削除リクエストを受け取りました。当社チームは7営業日以内にリクエストを処理いたします。削除が完了すると確認メールをお送りします。",
      submitAnother: "別のリクエストを送信"
    },
    errors: {
      emailRequired: "メールアドレスは必須です。",
      emailInvalid: "有効なメールアドレスを入力してください。",
      submitError: "リクエストの送信中にエラーが発生しました。後でもう一度お試しください。"
    },
    warning: {
      title: "重要な警告",
      items: [
        "この操作は完全かつ不可逆的です",
        "すべての個人データが完全に削除されます",
        "位置履歴とレポートが削除されます",
        "削除後にアカウントを復旧することはできません",
        "処理には最大7営業日かかる場合があります"
      ]
    },
    additionalInfo: {
      title: "追加情報:",
      items: [
        "アカウント所有者のみが削除をリクエストできます",
        "アカウントに関連付けられた同じメールアドレスを使用する必要があります",
        "法律で義務付けられている一部のデータは保持される場合があります",
        "統計分析用の匿名化データは保持される場合があります",
        "処理前に当社にご連絡いただければ、このリクエストをキャンセルできます"
      ],
      contact: {
        text: "このプロセスについてご質問がある場合は、こちらまでお問い合わせください:",
        email: "contact@mapazzz.com"
      }
    }
  }
};