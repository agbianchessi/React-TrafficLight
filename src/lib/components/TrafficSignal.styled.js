import styled from 'styled-components';

export const StyledTrafficSignal = styled.span`
    position: relative;
    display: inline-block;
    width: ${({ width }) => width == null ? '100%' : width};
    margin: ${({ margin }) => margin == null ? '0' : margin};
`;