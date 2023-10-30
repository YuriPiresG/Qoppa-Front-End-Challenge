import { Form } from "./components/Form";
import loginScreen from "./assets/loginScreen.png";

export function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center h-H45 w-W80 drop-shadow-2xl shadow-lg">
          <div className="flex bg-white h-full w-W60">
            <Form />
          </div>
          <div>
            <img
              src={loginScreen}
              className="object-none w-W55 overflow-hidden h-H45"
            />
          </div>
        </div>
      </div>
    </>
  );
}
