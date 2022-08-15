import "./App.css";
import Tab from "./components/Tab";
import Accordion from "./components/Accordion";

function App() {

  const accordionData = [{
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
  }, 
 {
    title: "Section 2",
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga officia quia est corporis debitis impedit labore eius assumenda repudiandae quidem.'
  }, 
  {
    title: "Section 3",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius asperiores eos architecto nemo illo nobis minus fuga pariatur? Aliquam ea magni nihil dolore consequatur corporis facilis! Non, aliquam rem.'
  }, 
   {
    title: "Section 4",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum cupiditate quia obcaecati nihil quo.'
  }]

  return (
    <div className="App">
      <Tab />
      <div className="accordion-container">
      {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
