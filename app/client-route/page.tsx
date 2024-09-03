import { useTheme } from "../components/theme-provider";


export default function ClientRoutePage() {
    const theme = useTheme();
    console.log("El theme:",theme);
    const settings = {
        dots: true,
    };
    return (
        <h1 style={{ color: theme.colors.primary, }}>
            Client Route
        </h1>
    )
}
