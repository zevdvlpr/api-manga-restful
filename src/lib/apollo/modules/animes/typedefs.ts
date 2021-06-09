import { gql } from '@apollo/client';

export const typeDefs = gql`
  ################
  #  ALL_ANIMES  #
  ################
  
  type AllAnimesDataCategory {
    name: String
    image: String
  }
  
  type AllAnimesData {
    id: String
    category: AllAnimesDataCategory
  }
  
  type AllAnimes {
    totalItems: Float
    currentPage: Float
    pageSize: Float
    totalPages: Float
    startPage: Float
    endPage: Float
    startIndex: Float
    endIndex: Float
    pages: [Float]
    data: [AllAnimesData]
  }

  ###################
  #  RECENT_ANIMES  #
  ###################

  type RecentAnimesDataVideo {
    id: String
  }

  type RecentAnimesDataCategory {
    id: String
    image: String
  }

  type RecentAnimesData {
    title: String
    video: RecentAnimesDataVideo
    category: RecentAnimesDataCategory
  }

  type RecentAnimes {
    totalItems: Float
    currentPage: Float
    pageSize: Float
    totalPages: Float
    startPage: Float
    endPage: Float
    startIndex: Float
    endIndex: Float
    pages: [Float]
    data: [RecentAnimesData]
  }
  
  ####################
  #  POPULAR_ANIMES  #
  ####################
  
  type PopularAnimesDataCategory {
    name: String
    image: String
  }
  
  type PopularAnimesData {
    id: String
    category: PopularAnimesDataCategory
  }
  
  type PopularAnimes {
    totalItems: Float
    currentPage: Float
    pageSize: Float
    totalPages: Float
    startPage: Float
    endPage: Float
    startIndex: Float
    endIndex: Float
    pages: [Float]
    data: [PopularAnimesData]
  }

  #############
  #  QUERIES  #
  #############

  type Query {
    recentAnimes(
      currentPage: Float = 1
      pageSize: Float = 12
      maxPages: Float = 12
    ): RecentAnimes!
    popularAnimes(
      currentPage: Float = 1
      pageSize: Float = 12
      maxPages: Float = 12
    ): PopularAnimes!
    allAnimes(
      currentPage: Float = 1
      pageSize: Float = 12
      maxPages: Float = 12
    ): AllAnimes!
  }
`;
