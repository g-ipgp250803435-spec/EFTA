# EFTA Deployment Checklist

1. Upload to GitHub.
2. Confirm no credentials are committed.
3. Vercel environment variables:
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY

4. Supabase:
   - Enable Email Auth
   - Run database/schema.sql
   - Configure redirect URLs

5. Deploy.
