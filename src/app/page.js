"use client"

import {Editor, Element, Frame} from "@craftjs/core";
import {Pane} from "@/components/Pane";
import {Text} from "@/components/design/Text";
import {Container} from "@/components/design/Container";
import {Toolbox} from "@/components/Toolbox";
import {Inspector} from "@/components/Inspector";
import {Loader} from "@/components/Loader";
import AppLayers from "@/components/layer";

export default function Home() {
  return (
      <div className="row p-3">
          <Editor resolver={{Text, Container, Pane}}>
              <div className="col-9">
                  <Frame>
                      <Element is={Pane} canvas />
                  </Frame>
              </div>
              <div className="col-3">
                  <Toolbox/>
                  <Inspector/>
                  <AppLayers />
              </div>
              <Loader />
          </Editor>
      </div>
  );
}
