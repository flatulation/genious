CREATE TABLE IF NOT EXISTS pairs (
    user_id bigint,
    first text NOT NULL,
    second text NOT NULL,
    third text NOT NULL,
    UNIQUE (user_id, first, second, third)
);

CREATE INDEX IF NOT EXISTS pairs_first_second_third
ON pairs (first, second, third);

CREATE INDEX IF NOT EXISTS pairs_third
ON pairs (third);

CREATE OR REPLACE FUNCTION get_third_word(text, text) RETURNS text AS $get_third_word$
    DECLARE
        third text;
    BEGIN
        CREATE TEMP TABLE IF NOT EXISTS filtered AS
        SELECT p.third 
        FROM pairs p 
        WHERE first = $1 AND second = $2;

        SELECT f.third
        INTO third
        FROM filtered f TABLESAMPLE SYSTEM_ROWS(1);

        TRUNCATE filtered;

        RETURN third;
    END;
$get_third_word$ LANGUAGE plpgsql STRICT