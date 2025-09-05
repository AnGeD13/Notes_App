export interface ITextProps {
  dialog: {
    button: {
      close: string;
    };
  };
  note: {
    createdAt: string;
    updatedAt: string;
  };
  note_page: {
    general: {
      title_label: string;
      description_label: string;
      drag_drop_label: string;
      drag_drop_or: string;
      upload_btn_label: string;
      file_chip_label: string;
    };
    create: {
      title: string;
      button: {
        submit: string;
      };
    };
    edit: {
      title: string;
      button: {
        submit: string;
        delete: string;
      };
    };
  };
}
