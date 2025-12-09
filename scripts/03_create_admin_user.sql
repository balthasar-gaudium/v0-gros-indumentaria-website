-- Script para crear un usuario admin de prueba
-- Ejecutar esto en la SQL console de Supabase

-- Las credenciales serán:
-- Email: admin@gros.com
-- Contraseña: GrosAdmin123!

-- Primero, inserta el usuario en la tabla auth.users
-- En Supabase, esto se hace normalmente a través de la API de autenticación
-- Para propósitos de desarrollo, aquí está el SQL para crear el usuario admin

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  created_at,
  updated_at,
  phone,
  phone_confirmed_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@gros.com',
  crypt('GrosAdmin123!', gen_salt('bf')),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  false,
  NOW(),
  NOW(),
  NULL,
  NULL,
  '',
  '',
  '',
  ''
);

-- Luego, inserta en la tabla admin_users con el user_id que acabas de crear
INSERT INTO admin_users (user_id, email, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email = 'admin@gros.com'
ON CONFLICT DO NOTHING;

-- Actualiza el RLS para admin_users
DROP POLICY IF EXISTS "Admins can view all" ON admin_users;
DROP POLICY IF EXISTS "Admins can update all" ON admin_users;

CREATE POLICY "Admins can view all" ON admin_users
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can update all" ON admin_users
  FOR UPDATE USING (TRUE);
