CREATE TABLE `agenda_evento` (
	`id` int AUTO_INCREMENT NOT NULL,
	`dia` int NOT NULL,
	`horarioInicio` varchar(10) NOT NULL,
	`horarioFim` varchar(10) NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`tipo` varchar(50) NOT NULL,
	`palestrante` varchar(255),
	`local` varchar(255) NOT NULL,
	`descricao` text NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `agenda_evento_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bi_setor` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`percentual` varchar(10) NOT NULL,
	`descricao` text NOT NULL,
	`icone` varchar(50) NOT NULL,
	`cor` varchar(50) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bi_setor_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `desafios_mercado` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`percentual` varchar(10) NOT NULL,
	`descricao` text NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `desafios_mercado_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `expositores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`categoria` varchar(255) NOT NULL,
	`descricao` text NOT NULL,
	`icone` varchar(50) NOT NULL,
	`produtos` text NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `expositores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `faq` (
	`id` int AUTO_INCREMENT NOT NULL,
	`pergunta` text NOT NULL,
	`resposta` text NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `faq_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `palestrantes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`cargo` varchar(255) NOT NULL,
	`empresa` varchar(255) NOT NULL,
	`foto` text,
	`bio` text,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `palestrantes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `passes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`descricao` text NOT NULL,
	`preco` int NOT NULL,
	`precoOriginal` int NOT NULL,
	`beneficios` text NOT NULL,
	`destaque` int NOT NULL DEFAULT 0,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `passes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `patrocinadores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`nivel` enum('diamond','gold','silver','bronze') NOT NULL,
	`logo` text,
	`sigla` varchar(10) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `patrocinadores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projecoes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`valor` varchar(100) NOT NULL,
	`descricao` text NOT NULL,
	`cor` varchar(50) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projecoes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `roi_beneficio` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`descricao` text NOT NULL,
	`icone` varchar(50) NOT NULL,
	`cor` varchar(50) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `roi_beneficio_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sessoes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`categoria` varchar(100) NOT NULL,
	`corCategoria` varchar(50) NOT NULL,
	`descricao` text NOT NULL,
	`palestranteId` int,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sessoes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `setor_numeros` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`valor` varchar(100) NOT NULL,
	`descricao` text NOT NULL,
	`icone` varchar(50) NOT NULL,
	`cor` varchar(50) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `setor_numeros_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tendencias` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`percentual` varchar(10) NOT NULL,
	`descricao` text NOT NULL,
	`icone` varchar(50) NOT NULL,
	`cor` varchar(50) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`ativo` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `tendencias_id` PRIMARY KEY(`id`)
);
