const mockUser = {
  name: 'Candidate User',
  email: 'candidate@example.com',
  phone: '(11) 99999-9999',
  resume: 'Resumo profissional e experiência...',
};

const mockJobs = [
  { id: '1', title: 'Desenvolvedor React Native', company: 'Tech Company', location: 'São Paulo' },
  { id: '2', title: 'Engenheiro de Software', company: 'Innovatech', location: 'Rio de Janeiro' },
  { id: '3', title: 'Analista de Dados', company: 'DataCorp', location: 'Belo Horizonte' },
];

const mockApplications = [
  { id: '1', jobTitle: 'Desenvolvedor React Native', status: 'Em análise' },
  { id: '2', jobTitle: 'Engenheiro de Software', status: 'Entrevista marcada' },
];

const mockRecommendedJobs = [
  { id: '1', title: 'Desenvolvedor React Native', company: 'Tech Company', location: 'São Paulo' },
  { id: '2', title: 'Analista de Sistemas', company: 'Soft Solutions', location: 'Curitiba' },
];

const mockFavorites = [
  { id: '1', title: 'Desenvolvedor React Native', company: 'Tech Company', location: 'São Paulo' },
  { id: '2', title: 'Analista de Sistemas', company: 'Soft Solutions', location: 'Curitiba' },
];

const mockHistory = [
  { id: '1', jobTitle: 'Desenvolvedor React Native', date: '2023-05-01', status: 'Rejeitado' },
  { id: '2', jobTitle: 'Engenheiro de Software', date: '2023-04-15', status: 'Contratado' },
];

const mockMessages = [
  { id: '1', sender: 'Empresa', text: 'Olá, obrigado por se candidatar!' },
  { id: '2', sender: 'Candidato', text: 'Obrigado pela oportunidade.' },
];

const mockNotifications = [
  { id: '1', message: 'Nova vaga recomendada para você.' },
  { id: '2', message: 'Sua candidatura foi visualizada pela empresa.' },
];

export const login = async (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve({ token: 'dummy-token', user: mockUser });
      } else {
        resolve(null);
      }
    }, 1000);
  });
};

export const logout = async () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

export const getJobs = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockJobs), 500));
};

export const getApplications = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockApplications), 500));
};

export const getRecommendedJobs = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockRecommendedJobs), 500));
};

export const getFavorites = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockFavorites), 500));
};

export const getApplicationHistory = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockHistory), 500));
};

export const getMessages = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockMessages), 500));
};

export const getNotifications = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockNotifications), 500));
};

export const getProfile = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockUser), 500));
};

export const saveProfile = async (profile) => {
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};

export const saveResume = async (resume) => {
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};
