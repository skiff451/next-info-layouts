import React from "react";
import { useModal } from "../../layouts/modalLayout/useModal";

export const SomeComponent = () => {
  const { openModal, closeModal } = useModal();
  const firstModal = (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        width: "300px",
        height: "200px",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={closeModal}
      >
        &#10006;
      </span>
      <p style={{ textAlign: "center" }}>some text</p>
    </div>
  );

  const secondModal = (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        width: "300px",
        height: "700px",
        position: "relative",
        borderRadius: "10px",
        overflowY: "scroll",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={closeModal}
      >
        &#10006;
      </span>
      <p style={{ textAlign: "center" }}>some another text</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor
        id eu nisl nunc mi ipsum. Dapibus ultrices in iaculis nunc. Vel eros
        donec ac odio tempor orci dapibus ultrices in. Magna etiam tempor orci
        eu lobortis elementum nibh. Ultricies mi eget mauris pharetra et
        ultrices. Amet porttitor eget dolor morbi non. Sit amet nulla facilisi
        morbi tempus. Velit ut tortor pretium viverra. Morbi tincidunt augue
        interdum velit euismod in pellentesque massa placerat. Massa tempor nec
        feugiat nisl. Et netus et malesuada fames ac turpis egestas. Risus nec
        feugiat in fermentum posuere urna nec. Sed felis eget velit aliquet
        sagittis id consectetur purus. Ornare massa eget egestas purus viverra
        accumsan in nisl nisi. Placerat orci nulla pellentesque dignissim.
        Convallis aenean et tortor at risus. Suscipit adipiscing bibendum est
        ultricies integer quis auctor elit. Orci ac auctor augue mauris augue
        neque gravida in. Dolor sed viverra ipsum nunc aliquet bibendum enim
        facilisis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
        nec. Pellentesque nec nam aliquam sem. Ipsum faucibus vitae aliquet nec
        ullamcorper sit. Ut sem viverra aliquet eget sit amet tellus cras. Massa
        sed elementum tempus egestas sed sed risus pretium. Sit amet purus
        gravida quis. In massa tempor nec feugiat nisl pretium fusce id velit.
        Consequat mauris nunc congue nisi vitae suscipit tellus. In mollis nunc
        sed id semper. Dignissim cras tincidunt lobortis feugiat vivamus at.
        Egestas diam in arcu cursus euismod quis. Gravida quis blandit turpis
        cursus in hac habitasse. Eget est lorem ipsum dolor sit amet consectetur
        adipiscing. Bibendum est ultricies integer quis auctor elit sed. Lorem
        sed risus ultricies tristique nulla aliquet enim tortor at. Nec feugiat
        in fermentum posuere. Dolor sed viverra ipsum nunc aliquet bibendum enim
        facilisis gravida. Eget dolor morbi non arcu risus quis. Vitae suscipit
        tellus mauris a diam. Quisque id diam vel quam elementum pulvinar. Cras
        sed felis eget velit aliquet sagittis. At imperdiet dui accumsan sit
        amet nulla facilisi morbi tempus. Commodo nulla facilisi nullam vehicula
        ipsum a arcu cursus vitae. Mattis ullamcorper velit sed ullamcorper
        morbi. Ultrices dui sapien eget mi proin sed libero enim. Sed nisi lacus
        sed viverra tellus in. Eget felis eget nunc lobortis. Dictumst quisque
        sagittis purus sit amet volutpat consequat. Lectus sit amet est
        placerat. Id aliquet lectus proin nibh. In ornare quam viverra orci
        sagittis. Sit amet nisl purus in mollis nunc sed id semper. Volutpat
        commodo sed egestas egestas fringilla. Est ante in nibh mauris cursus
        mattis molestie a. Eu facilisis sed odio morbi quis. Lacus vestibulum
        sed arcu non odio euismod. Tristique et egestas quis ipsum suspendisse
        ultrices gravida dictum fusce. Pellentesque elit eget gravida cum.
        Mattis aliquam faucibus purus in massa. At lectus urna duis convallis
        convallis tellus.
      </p>
    </div>
  );

  return (
    <div
      style={{
        padding: "0 20px",
        margin: "30px auto",
        width: "700px",
      }}
    >
      <button
        onClick={() => {
          openModal(firstModal);
        }}
      >
        openModal
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor
        id eu nisl nunc mi ipsum. Dapibus ultrices in iaculis nunc. Vel eros
        donec ac odio tempor orci dapibus ultrices in. Magna etiam tempor orci
        eu lobortis elementum nibh. Ultricies mi eget mauris pharetra et
        ultrices. Amet porttitor eget dolor morbi non. Sit amet nulla facilisi
        morbi tempus. Velit ut tortor pretium viverra. Morbi tincidunt augue
        interdum velit euismod in pellentesque massa placerat. Massa tempor nec
        feugiat nisl. Et netus et malesuada fames ac turpis egestas. Risus nec
        feugiat in fermentum posuere urna nec. Sed felis eget velit aliquet
        sagittis id consectetur purus. Ornare massa eget egestas purus viverra
        accumsan in nisl nisi. Placerat orci nulla pellentesque dignissim.
        Convallis aenean et tortor at risus. Suscipit adipiscing bibendum est
        ultricies integer quis auctor elit. Orci ac auctor augue mauris augue
        neque gravida in. Dolor sed viverra ipsum nunc aliquet bibendum enim
        facilisis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
        nec. Pellentesque nec nam aliquam sem. Ipsum faucibus vitae aliquet nec
        ullamcorper sit. Ut sem viverra aliquet eget sit amet tellus cras. Massa
        sed elementum tempus egestas sed sed risus pretium. Sit amet purus
        gravida quis. In massa tempor nec feugiat nisl pretium fusce id velit.
        Consequat mauris nunc congue nisi vitae suscipit tellus. In mollis nunc
        sed id semper. Dignissim cras tincidunt lobortis feugiat vivamus at.
        Egestas diam in arcu cursus euismod quis. Gravida quis blandit turpis
        cursus in hac habitasse. Eget est lorem ipsum dolor sit amet consectetur
        adipiscing. Bibendum est ultricies integer quis auctor elit sed. Lorem
        sed risus ultricies tristique nulla aliquet enim tortor at. Nec feugiat
        in fermentum posuere. Dolor sed viverra ipsum nunc aliquet bibendum enim
        facilisis gravida. Eget dolor morbi non arcu risus quis. Vitae suscipit
        tellus mauris a diam. Quisque id diam vel quam elementum pulvinar. Cras
        sed felis eget velit aliquet sagittis. At imperdiet dui accumsan sit
        amet nulla facilisi morbi tempus. Commodo nulla facilisi nullam vehicula
        ipsum a arcu cursus vitae. Mattis ullamcorper velit sed ullamcorper
        morbi. Ultrices dui sapien eget mi proin sed libero enim. Sed nisi lacus
        sed viverra tellus in. Eget felis eget nunc lobortis. Dictumst quisque
        sagittis purus sit amet volutpat consequat. Lectus sit amet est
        placerat. Id aliquet lectus proin nibh. In ornare quam viverra orci
        sagittis. Sit amet nisl purus in mollis nunc sed id semper. Volutpat
        commodo sed egestas egestas fringilla. Est ante in nibh mauris cursus
        mattis molestie a. Eu facilisis sed odio morbi quis. Lacus vestibulum
        sed arcu non odio euismod. Tristique et egestas quis ipsum suspendisse
        ultrices gravida dictum fusce. Pellentesque elit eget gravida cum.
        Mattis aliquam faucibus purus in massa. At lectus urna duis convallis
        convallis tellus.
      </p>
      <p>
        Vel risus commodo viverra maecenas accumsan. Id volutpat lacus laoreet
        non curabitur gravida arcu. Dolor sit amet consectetur adipiscing elit.
        Turpis egestas integer eget aliquet nibh praesent tristique magna sit.
        Sit amet purus gravida quis blandit. Urna condimentum mattis
        pellentesque id nibh tortor id aliquet. Commodo ullamcorper a lacus
        vestibulum sed. Venenatis cras sed felis eget velit aliquet sagittis id.
        Interdum posuere lorem ipsum dolor sit amet consectetur. Sit amet
        volutpat consequat mauris nunc congue nisi vitae. Pulvinar sapien et
        ligula ullamcorper malesuada proin libero. Odio eu feugiat pretium nibh.
        Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla.
        Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
        Nunc pulvinar sapien et ligula ullamcorper. Nibh cras pulvinar mattis
        nunc sed blandit libero. Enim sit amet venenatis urna cursus eget nunc
        scelerisque viverra. Pretium quam vulputate dignissim suspendisse in est
        ante in. In tellus integer feugiat scelerisque. Elit at imperdiet dui
        accumsan sit amet nulla. Auctor elit sed vulputate mi sit amet mauris
        commodo quis. Commodo viverra maecenas accumsan lacus vel facilisis.
        Nibh sed pulvinar proin gravida hendrerit lectus. Diam quam nulla
        porttitor massa id neque aliquam vestibulum. Lectus magna fringilla urna
        porttitor rhoncus dolor purus non. Dui nunc mattis enim ut tellus. Eget
        magna fermentum iaculis eu non diam. Massa sapien faucibus et molestie
        ac feugiat sed. Sit amet nulla facilisi morbi. Blandit cursus risus at
        ultrices mi tempus imperdiet. Aenean pharetra magna ac placerat
        vestibulum lectus mauris ultrices. Maecenas ultricies mi eget mauris
        pharetra. Vel elit scelerisque mauris pellentesque pulvinar
        pellentesque. Porttitor leo a diam sollicitudin. Vel fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Elit scelerisque
        mauris pellentesque pulvinar pellentesque habitant morbi tristique.
        Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
        Pellentesque diam volutpat commodo sed. Vivamus at augue eget arcu
        dictum varius. Laoreet non curabitur gravida arcu ac tortor dignissim
        convallis. Varius vel pharetra vel turpis nunc. Massa eget egestas purus
        viverra accumsan in nisl nisi scelerisque. Lacus sed turpis tincidunt id
        aliquet risus feugiat in ante. Et malesuada fames ac turpis egestas
        integer eget aliquet. Enim sit amet venenatis urna cursus eget nunc
        scelerisque viverra. Magna fringilla urna porttitor rhoncus. Diam
        phasellus vestibulum lorem sed risus. Sit amet cursus sit amet dictum
        sit amet justo. Et netus et malesuada fames. In est ante in nibh mauris
        cursus mattis molestie a. Aliquet sagittis id consectetur purus ut.
        Commodo ullamcorper a lacus vestibulum sed arcu non. Et leo duis ut diam
        quam nulla porttitor massa id. Sed vulputate odio ut enim blandit
        volutpat maecenas volutpat. Imperdiet nulla malesuada pellentesque elit
        eget gravida cum sociis. Mattis aliquam faucibus purus in massa tempor
        nec feugiat. Risus at ultrices mi tempus imperdiet nulla. Morbi
        tristique senectus et netus et malesuada fames ac turpis. Lacus vel
        facilisis volutpat est velit egestas dui id ornare. Eget duis at tellus
        at urna condimentum mattis pellentesque id. Tortor pretium viverra
        suspendisse potenti nullam ac tortor.
      </p>
      <button
        onClick={() => {
          openModal(secondModal);
        }}
      >
        openModal
      </button>
      <p>
        Tempor id eu nisl nunc mi. Est lorem ipsum dolor sit amet consectetur
        adipiscing. Purus ut faucibus pulvinar elementum integer enim neque
        volutpat. Scelerisque in dictum non consectetur a erat nam. Tortor
        condimentum lacinia quis vel eros donec ac odio. Penatibus et magnis dis
        parturient montes nascetur ridiculus mus mauris. Consectetur purus ut
        faucibus pulvinar. Nulla aliquet enim tortor at auctor urna nunc id
        cursus. Quisque egestas diam in arcu cursus euismod quis. Aliquam
        eleifend mi in nulla posuere sollicitudin. Pellentesque elit eget
        gravida cum sociis. Congue nisi vitae suscipit tellus mauris a.
        Venenatis lectus magna fringilla urna porttitor. Aenean sed adipiscing
        diam donec adipiscing tristique risus. Elit pellentesque habitant morbi
        tristique senectus et. Auctor urna nunc id cursus metus aliquam. Eu sem
        integer vitae justo eget magna. Malesuada proin libero nunc consequat.
        Proin libero nunc consequat interdum varius sit amet mattis vulputate.
        Arcu cursus vitae congue mauris rhoncus aenean. Id nibh tortor id
        aliquet. In pellentesque massa placerat duis ultricies lacus sed turpis
        tincidunt. Pulvinar proin gravida hendrerit lectus a. Metus dictum at
        tempor commodo ullamcorper a lacus vestibulum sed. Elementum curabitur
        vitae nunc sed velit dignissim. Proin sed libero enim sed faucibus
        turpis in eu. Aliquam etiam erat velit scelerisque in dictum non. Varius
        vel pharetra vel turpis nunc eget lorem dolor. A erat nam at lectus urna
        duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet
        massa. Tristique sollicitudin nibh sit amet commodo. Tortor consequat id
        porta nibh venenatis cras. Iaculis eu non diam phasellus vestibulum
        lorem. Justo eget magna fermentum iaculis eu. Convallis posuere morbi
        leo urna. Vulputate dignissim suspendisse in est ante in nibh. Mattis
        ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. In
        iaculis nunc sed augue lacus viverra vitae congue. Euismod elementum
        nisi quis eleifend quam adipiscing vitae proin. Posuere urna nec
        tincidunt praesent semper. Sit amet risus nullam eget felis eget nunc
        lobortis mattis. Tristique risus nec feugiat in fermentum posuere urna
        nec. At lectus urna duis convallis. Sed risus pretium quam vulputate
        dignissim suspendisse. Lacus suspendisse faucibus interdum posuere. Elit
        duis tristique sollicitudin nibh sit. Nunc aliquet bibendum enim
        facilisis gravida. Varius duis at consectetur lorem donec massa. Sodales
        ut eu sem integer vitae justo. Consectetur adipiscing elit ut aliquam
        purus sit amet. Est pellentesque elit ullamcorper dignissim cras
        tincidunt lobortis. Amet luctus venenatis lectus magna. Egestas pretium
        aenean pharetra magna ac placerat vestibulum. Vitae tempus quam
        pellentesque nec. Orci dapibus ultrices in iaculis nunc. Sed libero enim
        sed faucibus turpis in eu mi. Viverra maecenas accumsan lacus vel
        facilisis volutpat est velit. At lectus urna duis convallis convallis.
        Nibh nisl condimentum id venenatis a condimentum vitae sapien
        pellentesque. Duis at tellus at urna. Mollis aliquam ut porttitor leo a
        diam sollicitudin tempor. Donec pretium vulputate sapien nec sagittis
        aliquam. Tristique sollicitudin nibh sit amet commodo nulla facilisi
        nullam. Ullamcorper sit amet risus nullam eget felis eget. Et netus et
        malesuada fames ac turpis. Nibh nisl condimentum id venenatis a
        condimentum vitae sapien. Fusce id velit ut tortor pretium viverra
        suspendisse. Sed libero enim sed faucibus turpis in eu mi. Euismod
        elementum nisi quis eleifend quam adipiscing. Metus aliquam eleifend mi
        in nulla. Urna nec tincidunt praesent semper. Gravida in fermentum et
        sollicitudin ac orci phasellus. Rutrum tellus pellentesque eu tincidunt
        tortor aliquam nulla facilisi. Duis convallis convallis tellus id.
        Cursus risus at ultrices mi. Iaculis at erat pellentesque adipiscing.
        Purus sit amet luctus venenatis lectus magna fringilla urna porttitor.
        Faucibus interdum posuere lorem ipsum. Sit amet consectetur adipiscing
        elit pellentesque habitant morbi. Sagittis orci a scelerisque purus
        semper eget duis. Etiam non quam lacus suspendisse faucibus interdum
        posuere. Pretium lectus quam id leo in vitae turpis massa sed.
        Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt.
        Nec feugiat in fermentum posuere. Ridiculus mus mauris vitae ultricies.
        Integer enim neque volutpat ac. Condimentum mattis pellentesque id nibh
        tortor id aliquet lectus proin. Urna duis convallis convallis tellus id
        interdum velit laoreet. Gravida dictum fusce ut placerat orci nulla.
      </p>
      <p>
        Eget mauris pharetra et ultrices. Lectus urna duis convallis convallis
        tellus id interdum. Dictum fusce ut placerat orci. Dolor sit amet
        consectetur adipiscing elit ut. Scelerisque varius morbi enim nunc.
        Pulvinar neque laoreet suspendisse interdum consectetur libero id. Ac
        feugiat sed lectus vestibulum mattis ullamcorper velit. Eget magna
        fermentum iaculis eu non diam. Consequat semper viverra nam libero justo
        laoreet. Lectus mauris ultrices eros in cursus turpis massa. Augue neque
        gravida in fermentum et sollicitudin ac orci. Facilisis gravida neque
        convallis a cras semper auctor. Et sollicitudin ac orci phasellus.
        Placerat vestibulum lectus mauris ultrices. Pharetra et ultrices neque
        ornare aenean euismod elementum nisi quis. Turpis cursus in hac
        habitasse platea. Tempus urna et pharetra pharetra. Mauris augue neque
        gravida in fermentum et. Justo laoreet sit amet cursus. Ac turpis
        egestas integer eget aliquet nibh. Arcu felis bibendum ut tristique et
        egestas quis ipsum suspendisse. Diam vel quam elementum pulvinar etiam
        non quam lacus. Eu facilisis sed odio morbi quis commodo odio. Nibh
        mauris cursus mattis molestie a iaculis. Sapien faucibus et molestie ac
        feugiat sed lectus. Libero nunc consequat interdum varius. Tellus rutrum
        tellus pellentesque eu. Sit amet est placerat in egestas. Semper feugiat
        nibh sed pulvinar proin gravida. Sit amet luctus venenatis lectus magna
        fringilla urna porttitor rhoncus. Velit euismod in pellentesque massa
        placerat duis ultricies. Dui ut ornare lectus sit amet est. Venenatis
        urna cursus eget nunc scelerisque viverra. Ac turpis egestas sed tempus
        urna et. Ante in nibh mauris cursus mattis molestie a.
      </p>
    </div>
  );
};
