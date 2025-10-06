export interface PrivacyPolicyContent {
  subtitle?: string;
  text: string | string[];
}

export interface PrivacyPolicySection {
  title: string;
  content: PrivacyPolicyContent[];
}

interface ContactInfo {
  title: string;
  description: string;
  email: string;
  addressLabel: string;
  address: string;
  supportLabel: string;
  support: string;
}

interface ConsentInfo {
  title: string;
  text: string;
}

interface PrivacyPolicyTranslation {
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: PrivacyPolicySection[];
  contact: ContactInfo;
  consent: ConsentInfo;
  lastUpdated: string;
}

export const privacyPolicyTranslations: Record<"pt" | "en" | "jp", PrivacyPolicyTranslation> = {
  pt: {
    title: "Política de Privacidade",
    effectiveDate: "Data de Vigência: 6 de outubro de 2025",
    introduction: "No MapaZZZ, estamos comprometidos em proteger sua privacidade e garantir transparência sobre como coletamos, usamos e protegemos suas informações pessoais. Esta Política de Privacidade explica nossas práticas relacionadas aos dados que coletamos quando você usa nosso aplicativo móvel.",
    sections: [
      {
        title: "1. Informações que Coletamos",
        content: [
          {
            subtitle: "1.1 Informações Pessoais",
            text: [
              "Informações da Conta: Endereço de e-mail, nome e informações de perfil quando você cria uma conta",
              "Dados de Autenticação: Credenciais de login e tokens de autenticação para acesso seguro"
            ]
          },
          {
            subtitle: "1.2 Informações de Localização",
            text: [
              "Localização GPS: Coletamos dados precisos de sua localização para fornecer serviços baseados em localização, mapas e recursos de navegação",
              "Dados de Geocodificação: Informações de endereço derivadas das coordenadas de sua localização"
            ]
          },
          {
            subtitle: "1.3 Informações do Dispositivo",
            text: [
              "Identificadores do Dispositivo: Identificadores únicos do dispositivo para funcionalidade do aplicativo e notificações push",
              "Sensores do Dispositivo: Bússola, acelerômetro e outros dados de sensores para recursos aprimorados do aplicativo",
              "Acesso à Câmera: Fotos e dados da câmera quando você usa recursos de câmera dentro do aplicativo"
            ]
          },
          {
            subtitle: "1.4 Informações de Uso",
            text: [
              "Análise do Aplicativo: Como você interage com nosso aplicativo, recursos usados e dados de desempenho",
              "Dados de Log: Informações técnicas sobre seu dispositivo e uso do aplicativo para solução de problemas"
            ]
          },
          {
            subtitle: "1.5 Comunicações",
            text: [
              "Notificações Push: Tokens do dispositivo para enviar notificações e atualizações relevantes",
              "Comunicações de Suporte: Mensagens que você envia para nossa equipe de suporte"
            ]
          }
        ]
      },
      {
        title: "2. Como Usamos Suas Informações",
        content: [
          {
            text: "Usamos as informações coletadas para:"
          },
          {
            text: [
              "Fornecer e manter nossos serviços de aplicativo",
              "Autenticar sua identidade e proteger sua conta",
              "Fornecer recursos baseados em localização e serviços de mapeamento",
              "Enviar notificações push sobre atualizações ou recursos importantes",
              "Melhorar o desempenho do aplicativo e a experiência do usuário",
              "Fornecer suporte ao cliente e responder a consultas",
              "Garantir a segurança do aplicativo e prevenir fraudes"
            ]
          }
        ]
      },
      {
        title: "3. Compartilhamento de Informações",
        content: [
          {
            text: "Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes circunstâncias:"
          },
          {
            subtitle: "3.1 Provedores de Serviços",
            text: [
              "Serviços Firebase/Google: Para autenticação, banco de dados e serviços de mensagens",
              "Google Maps: Para serviços de mapeamento e localização",
              "Armazenamento em Nuvem: Para backup seguro de dados e sincronização"
            ]
          },
          {
            subtitle: "3.2 Requisitos Legais",
            text: [
              "Quando exigido por lei, regulamentação ou processo legal",
              "Para proteger nossos direitos, privacidade, segurança ou propriedade",
              "Em conexão com uma fusão, aquisição ou venda de ativos"
            ]
          }
        ]
      },
      {
        title: "4. Segurança dos Dados",
        content: [
          {
            text: "Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:"
          },
          {
            text: [
              "Criptografia de dados em trânsito e em repouso",
              "Protocolos de autenticação seguros",
              "Avaliações e atualizações regulares de segurança",
              "Acesso limitado às informações pessoais com base na necessidade de saber"
            ]
          }
        ]
      },
      {
        title: "5. Retenção de Dados",
        content: [
          {
            text: "Retemos suas informações pessoais apenas pelo tempo necessário para:"
          },
          {
            text: [
              "Fornecer nossos serviços a você",
              "Cumprir obrigações legais",
              "Resolver disputas e fazer cumprir nossos acordos",
              "Melhorar nossos serviços"
            ]
          },
          {
            text: "As informações da conta são retidas até que você exclua sua conta. Os dados de localização podem ser retidos para fins de melhoria do serviço de forma anonimizada."
          }
        ]
      },
      {
        title: "6. Seus Direitos e Escolhas",
        content: [
          {
            text: "Você tem os seguintes direitos em relação às suas informações pessoais:"
          },
          {
            subtitle: "6.1 Acesso e Atualização",
            text: [
              "Visualizar e atualizar informações de sua conta através das configurações do aplicativo",
              "Solicitar uma cópia de seus dados pessoais"
            ]
          },
          {
            subtitle: "6.2 Controle de Localização",
            text: [
              "Habilitar ou desabilitar serviços de localização através das configurações do seu dispositivo",
              "Escolher quando compartilhar informações de localização dentro do aplicativo"
            ]
          },
          {
            subtitle: "6.3 Notificações",
            text: [
              "Gerenciar preferências de notificação push nas configurações do aplicativo",
              "Optar por não receber comunicações não essenciais"
            ]
          },
          {
            subtitle: "6.4 Exclusão de Conta",
            text: [
              "Excluir sua conta e dados associados através do aplicativo",
              "Entrar em contato conosco para exclusão completa de dados"
            ]
          }
        ]
      },
      {
        title: "7. Serviços de Terceiros",
        content: [
          {
            text: "Nosso aplicativo integra com serviços de terceiros que têm suas próprias políticas de privacidade:"
          },
          {
            text: [
              "Serviços Google (Firebase, Maps, Sign-In): Política de Privacidade do Google",
              "Google Play Services: Política de Privacidade do Google Play Services"
            ]
          }
        ]
      },
      {
        title: "8. Privacidade de Crianças",
        content: [
          {
            text: "Nosso aplicativo não é destinado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se tomarmos conhecimento de tal coleta, tomaremos medidas para excluir as informações prontamente."
          }
        ]
      },
      {
        title: "9. Transferências Internacionais de Dados",
        content: [
          {
            text: "Suas informações podem ser transferidas e processadas em países diferentes do seu. Garantimos que salvaguardas apropriadas estejam em vigor para proteger seus dados de acordo com as leis de privacidade aplicáveis."
          }
        ]
      },
      {
        title: "10. Alterações nesta Política de Privacidade",
        content: [
          {
            text: "Podemos atualizar esta Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações materiais por:"
          },
          {
            text: [
              "Publicar a política atualizada no aplicativo",
              "Enviar uma notificação através do aplicativo ou e-mail",
              "Atualizar a \"Data de Vigência\" no topo desta política"
            ]
          }
        ]
      }
    ],
    contact: {
      title: "11. Entre em Contato",
      description: "Se você tiver dúvidas, preocupações ou solicitações sobre esta Política de Privacidade ou suas informações pessoais, entre em contato conosco:",
      email: "contato@mapazzz.com",
      addressLabel: "Endereço",
      address: "Sua localização comercial",
      supportLabel: "Suporte do Aplicativo",
      support: "Através do formulário de contato no aplicativo"
    },
    consent: {
      title: "12. Consentimento",
      text: "Ao usar nosso aplicativo, você consente com a coleta, uso e compartilhamento de suas informações conforme descrito nesta Política de Privacidade."
    },
    lastUpdated: "Última Atualização: 6 de outubro de 2025"
  },
  en: {
    title: "Privacy Policy",
    effectiveDate: "Effective Date: October 6, 2025",
    introduction: "At MapaZZZ, we are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding the data we collect when you use our mobile application.",
    sections: [
      {
        title: "1. Information We Collect",
        content: [
          {
            subtitle: "1.1 Personal Information",
            text: [
              "Account Information: Email address, name, and profile information when you create an account",
              "Authentication Data: Login credentials and authentication tokens for secure access"
            ]
          },
          {
            subtitle: "1.2 Location Information",
            text: [
              "GPS Location: We collect your precise location data to provide location-based services, maps, and navigation features",
              "Geocoding Data: Address information derived from your location coordinates"
            ]
          },
          {
            subtitle: "1.3 Device Information",
            text: [
              "Device Identifiers: Unique device identifiers for app functionality and push notifications",
              "Device Sensors: Compass, accelerometer, and other sensor data for enhanced app features",
              "Camera Access: Photos and camera data when you use camera features within the app"
            ]
          },
          {
            subtitle: "1.4 Usage Information",
            text: [
              "App Analytics: How you interact with our app, features used, and performance data",
              "Log Data: Technical information about your device and app usage for troubleshooting"
            ]
          },
          {
            subtitle: "1.5 Communications",
            text: [
              "Push Notifications: Device tokens to send you relevant notifications and updates",
              "Support Communications: Messages you send to our support team"
            ]
          }
        ]
      },
      {
        title: "2. How We Use Your Information",
        content: [
          {
            text: "We use the collected information to:"
          },
          {
            text: [
              "Provide and maintain our app services",
              "Authenticate your identity and secure your account",
              "Deliver location-based features and mapping services",
              "Send push notifications about important updates or features",
              "Improve app performance and user experience",
              "Provide customer support and respond to inquiries",
              "Ensure app security and prevent fraud"
            ]
          }
        ]
      },
      {
        title: "3. Information Sharing",
        content: [
          {
            text: "We do not sell your personal information. We may share your information only in the following circumstances:"
          },
          {
            subtitle: "3.1 Service Providers",
            text: [
              "Firebase/Google Services: For authentication, database, and messaging services",
              "Google Maps: For mapping and location services",
              "Cloud Storage: For secure data backup and synchronization"
            ]
          },
          {
            subtitle: "3.2 Legal Requirements",
            text: [
              "When required by law, regulation, or legal process",
              "To protect our rights, privacy, safety, or property",
              "In connection with a merger, acquisition, or sale of assets"
            ]
          }
        ]
      },
      {
        title: "4. Data Security",
        content: [
          {
            text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:"
          },
          {
            text: [
              "Encryption of data in transit and at rest",
              "Secure authentication protocols",
              "Regular security assessments and updates",
              "Limited access to personal information on a need-to-know basis"
            ]
          }
        ]
      },
      {
        title: "5. Data Retention",
        content: [
          {
            text: "We retain your personal information only as long as necessary to:"
          },
          {
            text: [
              "Provide our services to you",
              "Comply with legal obligations",
              "Resolve disputes and enforce our agreements",
              "Improve our services"
            ]
          },
          {
            text: "Account information is retained until you delete your account. Location data may be retained for service improvement purposes in anonymized form."
          }
        ]
      },
      {
        title: "6. Your Rights and Choices",
        content: [
          {
            text: "You have the following rights regarding your personal information:"
          },
          {
            subtitle: "6.1 Access and Update",
            text: [
              "View and update your account information through the app settings",
              "Request a copy of your personal data"
            ]
          },
          {
            subtitle: "6.2 Location Control",
            text: [
              "Enable or disable location services through your device settings",
              "Choose when to share location information within the app"
            ]
          },
          {
            subtitle: "6.3 Notifications",
            text: [
              "Manage push notification preferences in app settings",
              "Opt out of non-essential communications"
            ]
          },
          {
            subtitle: "6.4 Account Deletion",
            text: [
              "Delete your account and associated data through the app",
              "Contact us for complete data deletion"
            ]
          }
        ]
      },
      {
        title: "7. Third-Party Services",
        content: [
          {
            text: "Our app integrates with third-party services that have their own privacy policies:"
          },
          {
            text: [
              "Google Services (Firebase, Maps, Sign-In): Google Privacy Policy",
              "Google Play Services: Google Play Services Privacy Policy"
            ]
          }
        ]
      },
      {
        title: "8. Children's Privacy",
        content: [
          {
            text: "Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information promptly."
          }
        ]
      },
      {
        title: "9. International Data Transfers",
        content: [
          {
            text: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws."
          }
        ]
      },
      {
        title: "10. Changes to This Privacy Policy",
        content: [
          {
            text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by:"
          },
          {
            text: [
              "Posting the updated policy in the app",
              "Sending you a notification through the app or email",
              "Updating the \"Effective Date\" at the top of this policy"
            ]
          }
        ]
      }
    ],
    contact: {
      title: "11. Contact Us",
      description: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:",
      email: "contact@mapazzz.com",
      addressLabel: "Address",
      address: "Your Business Address",
      supportLabel: "App Support",
      support: "Through the in-app contact form"
    },
    consent: {
      title: "12. Consent",
      text: "By using our app, you consent to the collection, use, and sharing of your information as described in this Privacy Policy."
    },
    lastUpdated: "Last Updated: October 6, 2025"
  },
  jp: {
    title: "プライバシーポリシー",
    effectiveDate: "発効日：2025年10月6日",
    introduction: "MapaZZZでは、お客様のプライバシーを保護し、個人情報の収集、使用、保護方法について透明性を確保することをお約束いたします。本プライバシーポリシーは、お客様が当社のモバイルアプリケーションをご利用いただく際に収集するデータに関する当社の慣行について説明しています。",
    sections: [
      {
        title: "1. 収集する情報",
        content: [
          {
            subtitle: "1.1 個人情報",
            text: [
              "アカウント情報：アカウント作成時のメールアドレス、名前、プロフィール情報",
              "認証データ：安全なアクセスのためのログイン認証情報と認証トークン"
            ]
          },
          {
            subtitle: "1.2 位置情報",
            text: [
              "GPS位置：位置ベースのサービス、マップ、ナビゲーション機能を提供するための正確な位置データ",
              "ジオコーディングデータ：位置座標から派生した住所情報"
            ]
          },
          {
            subtitle: "1.3 デバイス情報",
            text: [
              "デバイス識別子：アプリ機能およびプッシュ通知のための一意のデバイス識別子",
              "デバイスセンサー：拡張アプリ機能のためのコンパス、加速度計、その他のセンサーデータ",
              "カメラアクセス：アプリ内でカメラ機能を使用する際の写真とカメラデータ"
            ]
          },
          {
            subtitle: "1.4 使用情報",
            text: [
              "アプリ分析：アプリとの相互作用、使用された機能、パフォーマンスデータ",
              "ログデータ：トラブルシューティングのためのデバイスとアプリ使用に関する技術情報"
            ]
          },
          {
            subtitle: "1.5 コミュニケーション",
            text: [
              "プッシュ通知：関連する通知と更新を送信するためのデバイストークン",
              "サポートコミュニケーション：サポートチームに送信するメッセージ"
            ]
          }
        ]
      },
      {
        title: "2. 情報の使用方法",
        content: [
          {
            text: "収集した情報は以下の目的で使用されます："
          },
          {
            text: [
              "アプリサービスの提供と維持",
              "本人確認とアカウントの保護",
              "位置ベースの機能とマッピングサービスの提供",
              "重要な更新や機能に関するプッシュ通知の送信",
              "アプリパフォーマンスとユーザーエクスペリエンスの向上",
              "カスタマーサポートの提供とお問い合わせへの対応",
              "アプリセキュリティの確保と詐欺の防止"
            ]
          }
        ]
      },
      {
        title: "3. 情報の共有",
        content: [
          {
            text: "当社はお客様の個人情報を販売いたしません。以下の状況においてのみ情報を共有する場合があります："
          },
          {
            subtitle: "3.1 サービスプロバイダー",
            text: [
              "Firebase/Googleサービス：認証、データベース、メッセージングサービス用",
              "Google Maps：マッピングと位置サービス用",
              "クラウドストレージ：安全なデータバックアップと同期用"
            ]
          },
          {
            subtitle: "3.2 法的要件",
            text: [
              "法律、規制、または法的手続きによって要求される場合",
              "当社の権利、プライバシー、安全、または財産を保護するため",
              "合併、買収、または資産売却に関連して"
            ]
          }
        ]
      },
      {
        title: "4. データセキュリティ",
        content: [
          {
            text: "当社は、不正アクセス、改変、開示、または破壊から個人情報を保護するために、適切な技術的および組織的セキュリティ対策を実装しています。これには以下が含まれます："
          },
          {
            text: [
              "転送中および保存中のデータの暗号化",
              "安全な認証プロトコル",
              "定期的なセキュリティ評価と更新",
              "必要最小限の原則に基づく個人情報へのアクセス制限"
            ]
          }
        ]
      },
      {
        title: "5. データ保持",
        content: [
          {
            text: "当社は以下の目的に必要な期間のみ個人情報を保持します："
          },
          {
            text: [
              "お客様へのサービス提供",
              "法的義務の遵守",
              "紛争の解決と合意の執行",
              "サービスの改善"
            ]
          },
          {
            text: "アカウント情報はアカウントを削除するまで保持されます。位置データは匿名化された形でサービス改善目的で保持される場合があります。"
          }
        ]
      },
      {
        title: "6. お客様の権利と選択",
        content: [
          {
            text: "個人情報に関して以下の権利があります："
          },
          {
            subtitle: "6.1 アクセスと更新",
            text: [
              "アプリ設定を通じてアカウント情報を表示・更新",
              "個人データのコピーを要求"
            ]
          },
          {
            subtitle: "6.2 位置制御",
            text: [
              "デバイス設定を通じて位置サービスを有効または無効にする",
              "アプリ内で位置情報を共有するタイミングを選択"
            ]
          },
          {
            subtitle: "6.3 通知",
            text: [
              "アプリ設定でプッシュ通知の設定を管理",
              "非必須コミュニケーションのオプトアウト"
            ]
          },
          {
            subtitle: "6.4 アカウント削除",
            text: [
              "アプリを通じてアカウントと関連データを削除",
              "完全なデータ削除についてお問い合わせ"
            ]
          }
        ]
      },
      {
        title: "7. サードパーティサービス",
        content: [
          {
            text: "当社のアプリは独自のプライバシーポリシーを持つサードパーティサービスと統合しています："
          },
          {
            text: [
              "Googleサービス（Firebase、Maps、Sign-In）：Googleプライバシーポリシー",
              "Google Play Services：Google Play Servicesプライバシーポリシー"
            ]
          }
        ]
      },
      {
        title: "8. 児童のプライバシー",
        content: [
          {
            text: "当社のアプリは13歳未満の児童を対象としていません。13歳未満の児童から故意に個人情報を収集することはありません。そのような収集を認識した場合、速やかに情報を削除する措置を講じます。"
          }
        ]
      },
      {
        title: "9. 国際データ転送",
        content: [
          {
            text: "お客様の情報は、お客様の居住国以外の国に転送され、処理される場合があります。適用されるプライバシー法に従ってデータを保護するための適切な保護措置が講じられていることを保証します。"
          }
        ]
      },
      {
        title: "10. このプライバシーポリシーの変更",
        content: [
          {
            text: "当社は随時このプライバシーポリシーを更新する場合があります。重要な変更について以下の方法で通知いたします："
          },
          {
            text: [
              "アプリ内での更新されたポリシーの投稿",
              "アプリまたはメールを通じた通知の送信",
              "このポリシーの冒頭にある「発効日」の更新"
            ]
          }
        ]
      }
    ],
    contact: {
      title: "11. お問い合わせ",
      description: "このプライバシーポリシーまたはお客様の個人情報に関してご質問、ご懸念、ご要望がございましたら、以下までお問い合わせください：",
      email: "contact@mapazzz.com",
      addressLabel: "住所",
      address: "お客様の事業所住所",
      supportLabel: "アプリサポート",
      support: "アプリ内お問い合わせフォームを通じて"
    },
    consent: {
      title: "12. 同意",
      text: "当社のアプリを使用することにより、本プライバシーポリシーに記載されている情報の収集、使用、共有に同意したものとみなされます。"
    },
    lastUpdated: "最終更新日：2025年10月6日"
  }
};