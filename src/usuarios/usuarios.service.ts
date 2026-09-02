import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Ana Lima',
      email: 'ana@empresa.com',
      senhaHash: '$2b$12$HCV63KmAuhJ7aIK9lu0rIOCNQfCD95bO.46rCEkk0XREpOU1yI3b.',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash:
        '$2b$12$7GV46WZvQrutLSn5mJwRL./wfkyJulH0Ae3qdSmshS7XJhd5y/vQK',
      papel: 'solicitante',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Carla Souza',
      email: 'carla@empresa.com',
      senhaHash:
        '$2b$12$VrNxUdySFLi7cvXYIMrApuebEx5NUcyqXqpGaOm1PpT7NPg3c8t52',
      papel: 'auditor',
      ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}