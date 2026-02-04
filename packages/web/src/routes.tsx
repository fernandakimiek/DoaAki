import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { ItemDetails } from "./components/ItemDetails";
import { CreateDonation } from "./components/CreateDonation";
import { Messages } from "./components/Messages";
import { MessagesList } from "./components/MessagesList";
import { Profile } from "./components/Profile";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/item/:id",
    element: <ItemDetails />,
  },
  {
    path: "/create",
    element: <CreateDonation />,
  },
  {
    path: "/messages",
    element: (
      <Layout>
        <MessagesList />
      </Layout>
    ),
  },
  {
    path: "/messages/:id",
    element: <Messages />,
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
]);
