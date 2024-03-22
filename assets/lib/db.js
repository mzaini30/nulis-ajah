let namaDatabase = "nulis";

alasql(/*sql*/ `
create localStorage database if not exists ${namaDatabase};
attach localStorage database ${namaDatabase};
use ${namaDatabase};
create table if not exists nulis (
    id integer auto_increment,
    slug text,
    judul text,
    isi text
)
`);
