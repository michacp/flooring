export interface ListfacebookphotosI {
    source: any;
    id: any;
    link: any;
    name: any;
    from: PerfilI;
    likes: LikesI;
}
export interface PerfilI {
    id: any; 
    name: any;
}
export interface LikesI {
    summary:{total_count: any;}
}