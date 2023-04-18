import Layout from "./Layout";
import profile from "./picture/151381345_2876519655956105_8604140736854353930_n.jpg";
import "./owner.css";

function Owner() {
  return (
    <Layout>
      <div className="owner">
        <h1>Bright Kuna - Group F - 22</h1>
        <figure >
          <img src={profile} alt="Profile picture" />
        </figure>
        <h3>Biography</h3>
        <p>Hi, I'm Jirayu Kuna. You can call me <i>'Bright'</i>. I am interested and started learning coding at last year's end. 
        <br/>Currently, I'm still a newbie and interested in being BA. 
        <br/>If you are interested to teach a newbie please give me an advice 💖</p>
      </div>
    </Layout>
  );
}

export default Owner;
