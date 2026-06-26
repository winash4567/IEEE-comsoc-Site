import { supabase, isSupabaseReady } from './supabase'

function normalizePost(post) {
  return {
    id: post.id,
    title: post.title?.trim() || 'Untitled post',
    context: post.context?.trim() || 'A chapter story will appear here once the post is published.',
  }
}

export async function getPosts() {
  if (!isSupabaseReady || !supabase) {
    return { posts: [], error: null, ready: false }
  }

  const { data, error } = await supabase.from('posts').select('*').order('id', { ascending: false })

  return {
    posts: (data ?? []).map(normalizePost),
    error,
    ready: true,
  }
}

export async function getPostById(id) {
  if (!isSupabaseReady || !supabase) {
    return {
      post: null,
      error: new Error('Supabase is not configured.'),
      ready: false,
    }
  }

  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()

  return {
    post: data ? normalizePost(data) : null,
    error,
    ready: true,
  }
}
