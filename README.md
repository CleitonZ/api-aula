Estudante: Josicleiton Rildson Tibúrcio
Matrícula: 20251038060003
Comandos: docker compose run (para subir a aplicação), docker compose down (para fechar a aplicação), os testes são feitos através de requisições HTTP (GET, PATCH E POST), utilizando a extensão ThunderClient.
Exemplo de teste: método PATCH; URL: http://localhost:3000/solicitacoes/1/aprovar; Auth Bearer, com o token do usuário.

Nesse projeto, os usuários Josicleiton (gestor) e Tibúrcio (auditor) possuem os seguintes e-mails:

Josicleiton: josicleiton@empresa.com
Tibúrcio: tiburcio@empresa.com

Matrículas utilizadas: 20251038060003 para o gestor e 30006083015202 para o auditor, convertendo elas para hash temos:
$2b$12$RVZLIX/ijXNE41l1J9.HReSlB5alPcPLaqj6xxdUeYRThYN4//g7.
e
$2b$12$RfcxImV9xTnBXheDH9UBEOE0FZMbfBNyV43ezLO2ilphb4KDXA37m, respectivamente.

Consultei as seguintes fontes: material do github para procurar o melhor decorator para o fim que eu queria, além de pegar como exemplo códigos anteriores realizados.

É comum nos depararmos durante não só no ambiente de desenvolvimento mas na própria aplicação em sí rodando pelo lado do cliente "erros" relacionados a casos sem token e sem papel adequado contendo diferentes mensagens. Basicamente esses avisos servem como medida protetiva visto que o token é de uso único para um usuário específico, enquanto os papéis é uma categoria que pode abranger vários usuários. Exemplo: dois ou mais usuários, ambos com o papel de gestor, não deveriam ter acesso ao token um do outro, visto que isso seria uma clara falha de segurança daquela aplicação que poderia ser bastante danosa.