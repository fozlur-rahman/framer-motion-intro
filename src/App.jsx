import "./App.css";
import Counter from "./components/Counter";
import ScrollRevel from "./components/ScrollRevel";

function App() {
    return (
        <>
            <h1 className="text-green-600 text-xl  border-b w-fit mx-auto pb-4 mb-20">
                Framer motion animation
            </h1>
            {/* <Simple />
            <KeyFrame /> */}
            {/* <ButtonTap /> */}
            {/* <TextMotion /> */}
            {/* <TransitionAnimation /> */}
            {/* <Variant /> */}
            {/* <Counter /> */}
            <ScrollRevel />
        </>
    );
}

export default App;
