import React from "react";
import { IPropsPokeCard } from "./interfaces/IPropsPokeCard";
import {
  Container,
  PokeImageWrapper,
  PokeImg,
  PokeInfoWrapper,
  PokeInfoName,
  PokeInfoId,
  PokeBadge,
  PokeBadgeTitle,
} from "./styles";

const PokeCard: React.FC<IPropsPokeCard> = ({ pokemon }) => {
  return (
    <Container>
      <PokeImageWrapper>
        <PokeImg source={null} />
      </PokeImageWrapper>
      <PokeInfoWrapper>
        <PokeInfoName>{pokemon.name}</PokeInfoName>
        <PokeInfoId>{pokemon.url}</PokeInfoId>
      </PokeInfoWrapper>
      <PokeBadge>
        <PokeBadgeTitle>Poison</PokeBadgeTitle>
      </PokeBadge>
    </Container>
  );
};

export default PokeCard;
