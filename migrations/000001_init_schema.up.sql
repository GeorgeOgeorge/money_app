CREATE TABLE IF NOT EXISTS "user" (
    "id" integer
        not null,
    "username" varchar(50)
        not null
        unique
        check (length(username) >= 5 and username <> ''),
    "name" varchar(150)
        not null
        check (length(name) >= 5),
    "email" varchar(150)
        not null
        unique
        CHECK (email ~* '^\S+@\S+\.\S+$'),
    "password" varchar(60)
        not null,
    "phone" varchar(20)
        not null
        unique
        check (phone ~* '\+\d{2}\(\d{2}\)\d{9}'),
    "active" boolean
        not null
        default true,
    primary key(id)
);

create sequence if not exists public.user_id_seq
    as integer
    start with 1
    increment by 1
    minvalue 1
    no maxvalue
    cache 1
    owned by "user".id;

alter table "user"
    alter column "id"
    set default nextval('public.user_id_seq'::regclass);

CREATE TABLE IF NOT EXISTS "account" (
    "id" integer
        not null,
    "user_id" integer
        not null,
    "current_value" integer
        not null
        default 0,
    "active" boolean
        not null
        default true,
    primary key(id),
    constraint fk_user_id
        foreign key(user_id)
        references "user"(id)
);

create sequence if not exists public.account_id_seq
    as integer
    start with 1
    increment by 1
    minvalue 1
    no maxvalue
    cache 1
    owned by "account".id;

alter table "account"
    alter column "id"
    set default nextval('public.account_id_seq'::regclass);

CREATE TABLE IF NOT EXISTS "tag" (
    "id" integer
        unique
        not null,
    "user_id" integer
        not null,
    "name" varchar(15)
        not null
        check(name <> '' and length(name) > 3),
    "description" text,
    "expense_limit" decimal,
    "icon" text
        not null
        check(icon <> ''),
    "icon_colour" text
        not null
        check(icon_colour ~ '^#[0-9a-fA-F]{6}$'),
    "active" boolean
        not null
        default true,
    constraint pk_tag
        primary key (id, user_id),
    constraint fk_user_id
        foreign key(user_id)
        references "user"(id)
);

create sequence if not exists public.tag_id_seq
    as integer
    start with 1
    increment by 1
    minvalue 1
    no maxvalue
    cache 1
    owned by "tag".id;

alter table "tag"
    alter column "id"
    set default nextval('public.tag_id_seq'::regclass);

CREATE TABLE IF NOT EXISTS "payform" (
    "id" integer
        unique
        not null,
    "user_id" integer
        not null,
    "name" varchar(15)
        not null
        check(name <> '' and length(name) > 3),
    "icon" text
        not null
        check(icon <> ''),
    "icon_colour" text
        not null
        check(icon_colour ~ '^#[0-9a-fA-F]{6}$'),
    "active" boolean
        not null
        default true,
    constraint pk_payform
        primary key (id, user_id),
    constraint fk_user_id
        foreign key(user_id)
        references "user"(id)
);

create sequence if not exists public.payform_id_seq
    as integer
    start with 1
    increment by 1
    minvalue 1
    no maxvalue
    cache 1
    owned by "payform".id;

alter table "payform"
    alter column "id"
    set default nextval('public.payform_id_seq'::regclass);

CREATE TABLE IF NOT EXISTS "transaction" (
    "id" integer
        unique
        not null,
    "account_id" integer
        not null,
    "tag_id" integer
        not null,
    "payform_id" integer
        not null,
    "value" decimal
        not null,
    "date" date
        not null
        default now(),
    "active" boolean
        not null
        default true,
    primary key (id),
    constraint fk_account_id
        foreign key(account_id)
        references "account"(id),
    constraint fk_tag_id
        foreign key(tag_id)
        references "tag"(id),
    constraint fk_payform_id
        foreign key(payform_id)
        references "payform"(id)
);

create sequence if not exists public.transaction_id_seq
    as integer
    start with 1
    increment by 1
    minvalue 1
    no maxvalue
    cache 1
    owned by "transaction".id;

alter table "transaction"
    alter column "id"
    set default nextval('public.transaction_id_seq'::regclass);