 
export interface FacebookPost {
  id: string;
  permalink_url: string;
  created_time: string;
  attachments?: Attachments;
}

export interface Attachments {
  data: AttachmentData[];
}

export interface AttachmentData {
  media?: {
    image?: ImageData;
  };
  subattachments?: {
    data: SubattachmentData[];
  };
  type?: string;
  url?: string;
  target?: {
    id: string;
    url: string;
  };
}

export interface SubattachmentData {
  media?: {
    image?: ImageData;
  };
  target?: {
    id: string;
    url: string;
  };
  type?: string;
  url?: string;
}

export interface ImageData {
  height: number;
  width: number;
  src: string;
}