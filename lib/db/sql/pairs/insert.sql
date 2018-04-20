INSERT INTO pairs (
  user_id, first, second, third
) VALUES (
  ${userID}, ${first}, ${second}, ${third}
) ON CONFLICT DO NOTHING