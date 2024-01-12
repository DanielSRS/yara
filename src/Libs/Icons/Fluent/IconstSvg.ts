export type FluentIconNames =
  | 'ic_fluent_folder_20_regular'
  | 'ic_fluent_chevron_right_20_regular'
  | 'ic_fluent_document_20_regular';

const ic_fluent_folder_20_regular = (color: string) => `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 3C3.11929 3 2 4.11929 2 5.5V14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5V7.5C18 6.11929 16.8807 5 15.5 5H9.70711L8.21967 3.51256C7.89148 3.18437 7.44636 3 6.98223 3H4.5ZM3 5.5C3 4.67157 3.67157 4 4.5 4H6.98223C7.18115 4 7.37191 4.07902 7.51256 4.21967L8.79289 5.5L7.43934 6.85355C7.34557 6.94732 7.21839 7 7.08579 7H3V5.5ZM3 8H7.08579C7.48361 8 7.86514 7.84196 8.14645 7.56066L9.70711 6H15.5C16.3284 6 17 6.67157 17 7.5V14.5C17 15.3284 16.3284 16 15.5 16H4.5C3.67157 16 3 15.3284 3 14.5V8Z" fill="${color}"/>
</svg>`;

const ic_fluent_document_20_regular = (
  color: string,
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V7.41421C16 7.01639 15.842 6.63486 15.5607 6.35355L11.6464 2.43934C11.3651 2.15804 10.9836 2 10.5858 2H6ZM5 4C5 3.44772 5.44772 3 6 3H10V6.5C10 7.32843 10.6716 8 11.5 8H15V16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4ZM14.7929 7H11.5C11.2239 7 11 6.77614 11 6.5V3.20711L14.7929 7Z" fill="${color}"/>
</svg>`;

const ic_fluent_chevron_right_20_regular = (
  color: string,
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z" fill="${color}"/>
</svg>`;

export const icons = {
  ic_fluent_folder_20_regular: ic_fluent_folder_20_regular,
  ic_fluent_document_20_regular: ic_fluent_document_20_regular,
  ic_fluent_chevron_right_20_regular: ic_fluent_chevron_right_20_regular,
};
