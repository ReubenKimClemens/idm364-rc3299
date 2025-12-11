import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
    const id = params.id;

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw new Error(error.message);

    const { data: more } = await supabase
        .from('products')
        .select('*')
        .eq('type', product.type)
        .neq('id', id)
        .limit(3);

    return { product, more };
}
