import { AccountController } from "./controllers/AccountController.js";
import { ClipsController } from "./controllers/ClipsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ProfileController } from "./controllers/ProfileController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ClipsController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/profile',
    controllers: [ProfileController, ClipsController],
    view: 'app/views/ProfileView.html',
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




