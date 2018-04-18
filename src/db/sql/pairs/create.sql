CREATE TABLE IF NOT EXISTS pairs (
    user_id bigint,
    first text,
    second text,
    third text,
    PRIMARY KEY (user_id, first, second, third)
);

CREATE INDEX IF NOT EXISTS pairs_first_second_third 
ON pairs (first, second, third);

CREATE INDEX IF NOT EXISTS pairs_third
ON pairs (third);

CREATE FUNCTION get_third_word(text, text) RETURNS text AS $$
    DECLARE
        third text;
    BEGIN
        CREATE TEMP TABLE filtered AS
        SELECT p.third 
        FROM pairs p 
        WHERE first = $1 AND second = $2;

        SELECT f.third
        INTO third
        FROM filtered f TABLESAMPLE SYSTEM_ROWS(1);

        DROP TABLE filtered;

        RETURN third;
    END;
$$ LANGUAGE plpgsql STRICT