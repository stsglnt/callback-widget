export interface WidgetSettings {
  widget_type_id: number;
  name: string;
  active_fl: number;
  source_id: number;
  link_number_id: number;
  force_department_id: number;
  force_user_id: number;
  queue_email: number;
  description: string;
  send_to_ga: number;
  send_to_ga_event: string;
  position: number;
  color: string; // hex
  window_bg_color: string;
  time_start: string;
  time_end: string;
  dinner_start: string;
  dinner_end: string;
  usertext_title: string; // Есть вопросы, хотите мы перезвоним Вам?
  usertext_hint: string; // Введите свой номер, и мы перезвоним Вам
  usertext_example: string; // Например: 050 123 45 67 или 380 50 123 45 67
  usertext_button_hint: string; // Хотите, перезвоним Вам?
  language_id: number;
  ccode_country_id: number;
  is_ukrainian_site: number;
  online_operators_text: string; //text operators onine
  online_operators_num: number;
  online_calls_text: number
  online_calls_num: number
  full_widget: boolean;
}
