export interface Quote {
  id: number;
  content: string;
  source: string;
  year: string;
}

export enum ImageSize {
  Size1K = '1K',
  Size2K = '2K',
  Size4K = '4K',
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface SearchResult {
  text: string;
  sources: { title: string; uri: string }[];
}
