import { getMovies, getMovieById, addMovie, updateMovie, deleteMovie } from './data';

export const getContents = async (filters = {}) => {
  // Get movies from data.js
  let contents = await getMovies();

  // Apply filters
  if (filters.type) {
    contents = contents.filter(content => content.type === filters.type);
  }

  if (filters.platform) {
    contents = contents.filter(content => content.platform === filters.platform);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    contents = contents.filter(content => 
      content.title.toLowerCase().includes(searchLower) ||
      content.description.toLowerCase().includes(searchLower)
    );
  }

  return contents;
};

export const getContentById = async (id) => {
  return await getMovieById(id);
};

export const createContent = async (contentData) => {
  return await addMovie(contentData);
};

export const updateContent = async (id, contentData) => {
  return await updateMovie(id, contentData);
};

export const deleteContent = async (id) => {
  await deleteMovie(id);
  return true;
};