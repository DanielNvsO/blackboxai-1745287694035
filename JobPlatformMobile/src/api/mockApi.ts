export interface User {
  name: string;
  email: string;
  phone: string;
  resume: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
}

export interface Application {
  id: string;
  jobTitle: string;
  status: string;
}

export interface Message {
  id: string;
  sender: string;
  text: string;
}

export interface Notification {
  id: string;
  message: string;
}

const mockUser: User = {
  name: 'Candidate User',
  email: 'candidate@example.com',
  phone: '(11) 99999-9999',
  resume: 'Resumo profissional e experiência...',
};

const mockJobs: Job[] = [
  { id: '1', title: 'Desenvolvedor React Native', company: 'Tech Company', location: 'São Paulo' },
  { id: '2', title: 'Engenheiro de Software', company: 'Innovatech', location: 'Rio de Janeiro' },
  { id: '3', title: 'Analista de Dados', company: 'DataCorp', location: 'Belo Horizonte' },
];

const mockApplications: Application[] = [
  { id: '1', jobTitle: 'Desenvolvedor React Native', status: 'Em análise' },
  { id: '2', jobTitle: 'Engenheiro de Software', status: 'Entrevista marcada' },
];

const mockRecommendedJobs: Job[] = [
  { id: '1', title: 'Desenvolvedor React Native', company: 'Tech Company', location: 'São Paulo' },
  { id: '2', title: 'Analista de Sistemas', company: 'Soft Solutions', location: 'Curitiba' },
];

const mockFavorites: Job[] = [
  { id: '1', title: 'Desenvolvedor React Native', company: 'Tech Company', location: 'São Paulo' },
  { id: '2', title: 'Analista de Sistemas', company: 'Soft Solutions', location: 'Curitiba' },
];

const mockHistory: Application[] = [
  { id: '1', jobTitle: 'Desenvolvedor React Native', status: 'Rejeitado' },
  { id: '2', jobTitle: 'Engenheiro de Software', status: 'Contratado' },
];

const mockMessages: Message[] = [
  { id: '1', sender: 'Empresa', text: 'Olá, obrigado por se candidatar!' },
  { id: '2', sender: 'Candidato', text: 'Obrigado pela oportunidade.' },
];

const mockNotifications: Notification[] = [
  { id: '1', message: 'Nova vaga recomendada para você.' },
  { id: '2', message: 'Sua candidatura foi visualizada pela empresa.' },
];

export const login = async (username: string, password: string): Promise<{ token: string; user: User } | null> => {
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

export const logout = async (): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

export const getJobs = async (): Promise<Job[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockJobs), 500));
};

export const getApplications = async (): Promise<Application[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockApplications), 500));
};

export const getRecommendedJobs = async (): Promise<Job[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockRecommendedJobs), 500));
};

export const getFavorites = async (): Promise<Job[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockFavorites), 500));
};

export const getApplicationHistory = async (): Promise<Application[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockHistory), 500));
};

export const getMessages = async (): Promise<Message[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockMessages), 500));
};

export const getNotifications = async (): Promise<Notification[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockNotifications), 500));
};

export const getProfile = async (): Promise<User> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockUser), 500));
};

export const saveProfile = async (profile: User): Promise<{ success: boolean }> => {
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};

export const saveResume = async (resume: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
};
