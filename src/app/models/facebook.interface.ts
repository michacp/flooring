export interface ListfacebookphotosI {
    source: any;
    id: any;
    link: any;
    name: any;
    from: PerfilI;
    likes: LikesI;
    titleKey: string;
    descriptionKey: string;
}
export interface PerfilI {
    id: any; 
    name: any;
}
export interface LikesI {
    summary:{total_count: any;}
}