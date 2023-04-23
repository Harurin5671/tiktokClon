import { supabase } from './supabase.js'

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select('*, users (avatar, username, id)')
  return [data, error]
}
